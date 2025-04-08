import React, { useState, ChangeEvent, FormEvent } from "react";

type HinhAnh = {
    tenHinhAnh: string;
    duongDan: string;
};

type LoaiPhong = {
    idLoaiPhong: number;
};

type PhongDto = {
    tenPhong: string;
    giaPhong: number;
    sucChua: number;
    soPhong: number;
    moTa: string;
    loaiPhong: LoaiPhong;
    danhSachHinhAnh: HinhAnh[];
};

const ThemPhongPage: React.FC = () => {
    const [formData, setFormData] = useState<Omit<PhongDto, "danhSachHinhAnh">>({
        tenPhong: "",
        giaPhong: 0,
        sucChua: 0,
        soPhong: 0,
        moTa: "",
        loaiPhong: { idLoaiPhong: 0 }
    });

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "idLoaiPhong") {
            setFormData((prev) => ({
                ...prev,
                loaiPhong: { idLoaiPhong: parseInt(value) }
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: name === "giaPhong" || name === "sucChua" || name === "soPhong" ? parseInt(value) : value
            }));
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setSelectedFiles((prev) => [...prev, ...files]);
            const newPreviews = files.map((file) => URL.createObjectURL(file));
            setPreviewUrls((prev) => [...prev, ...newPreviews]);
        }
        e.target.value = "";
    };

    const handleRemoveImage = (index: number) => {
        const newFiles = [...selectedFiles];
        const newPreviews = [...previewUrls];
        newFiles.splice(index, 1);
        newPreviews.splice(index, 1);
        setSelectedFiles(newFiles);
        setPreviewUrls(newPreviews);
    };

    const uploadImage = async (file: File): Promise<HinhAnh> => {
        const form = new FormData();
        form.append("file", file);
        const res = await fetch("http://localhost:8080/api/phong/upload", {
            method: "POST",
            body: form
        });
        if (!res.ok) throw new Error("Lỗi khi upload ảnh");
        return await res.json();
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const uploadedImages: HinhAnh[] = [];
            for (const file of selectedFiles) {
                const img = await uploadImage(file);
                uploadedImages.push(img);
            }
            const fullData: PhongDto = {
                ...formData,
                danhSachHinhAnh: uploadedImages
            };
            const res = await fetch("http://localhost:8080/api/phong/themPhong", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(fullData)
            });
            if (!res.ok) throw new Error("Gửi thông tin phòng thất bại");
            alert("Thêm phòng thành công!");
        } catch (err) {
            console.error(err);
            alert("Có lỗi xảy ra!");
        }
    };

    return (
        <div className="container mt-5">
            <form className="card p-4 shadow" onSubmit={handleSubmit}>
                <h3 className="text-center mb-4">Thêm Phòng</h3>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input className="form-control" name="tenPhong" placeholder="Tên phòng" onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="number" name="giaPhong" placeholder="Giá phòng" onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="number" name="sucChua" placeholder="Sức chứa" onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="number" name="soPhong" placeholder="Số phòng" onChange={handleInputChange} />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" type="number" name="idLoaiPhong" placeholder="ID loại phòng" onChange={handleInputChange} />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" name="moTa" rows={3} placeholder="Mô tả" onChange={handleInputChange}></textarea>
                    </div>

                    <div className="col-12">
                        <label className="form-label">Hình ảnh</label>
                        <input className="form-control" type="file" multiple accept="image/*" onChange={handleFileChange} />
                    </div>
                </div>

                {previewUrls.length > 0 && (
                    <div className="mt-4">
                        <strong>Ảnh đã chọn:</strong>
                        <div className="d-flex flex-wrap gap-3 mt-2">
                            {previewUrls.map((url, index) => (
                                <div key={index} className="position-relative">
                                    <img src={url} alt="preview" className="rounded border" width={100} height={100} style={{ objectFit: "cover" }} />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="btn-close position-absolute top-0 start-100 translate-middle"
                                        aria-label="Close"
                                    ></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <button type="submit" className="btn btn-primary mt-4 w-100">
                    Thêm Phòng
                </button>
            </form>
        </div>
    );
};

export default ThemPhongPage;
