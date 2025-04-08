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

const Test: React.FC = () => {
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

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
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
            setSelectedFiles((prev) => [...prev, ...files]); // nối thêm chứ không ghi đè

            const newPreviews = files.map((file) => URL.createObjectURL(file));
            setPreviewUrls((prev) => [...prev, ...newPreviews]);
        }

        // 💡 Reset input để cùng tên file vẫn kích hoạt onChange
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

        const data = await res.json();
        return data as HinhAnh;
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
        <form onSubmit={handleSubmit}>
            <input name="tenPhong" placeholder="Tên phòng" onChange={handleInputChange} />
            <input name="giaPhong" type="number" placeholder="Giá phòng" onChange={handleInputChange} />
            <input name="sucChua" type="number" placeholder="Sức chứa" onChange={handleInputChange} />
            <input name="soPhong" type="number" placeholder="Số phòng" onChange={handleInputChange} />
            <textarea name="moTa" placeholder="Mô tả" onChange={handleInputChange}></textarea>
            <input name="idLoaiPhong" type="number" placeholder="ID loại phòng" onChange={handleInputChange} />

            <label>Hình Ảnh</label>
            <input type="file" multiple accept="image/*" onChange={handleFileChange} />

            {previewUrls.length > 0 && (
                <div>
                    <strong>Ảnh đã chọn:</strong>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "8px" }}>
                        {previewUrls.map((url, index) => (
                            <div key={index} style={{ position: "relative" }}>
                                <img src={url} alt="preview" width={70} height={70} style={{ objectFit: "cover" }} />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    style={{
                                        position: "absolute",
                                        top: -8,
                                        right: -8,
                                        background: "red",
                                        color: "white",
                                        borderRadius: "50%",
                                        width: 20,
                                        height: 20,
                                        fontWeight: "bold",
                                        border: "none",
                                        cursor: "pointer"
                                    }}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <button type="submit" style={{ marginTop: "16px" }}>
                Thêm Phòng
            </button>
        </form>
    );
};

export default Test;
