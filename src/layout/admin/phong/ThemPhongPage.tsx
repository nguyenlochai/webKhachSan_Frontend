import React, { useState, ChangeEvent, FormEvent } from "react";
import FooterAdmin from "../header-footer/FooterAdmin";


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

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    // Lấy toàn bộ thuộc tính của PhongDto trừ ra danhSachHinhAnh
    const [formData, setFormData] = useState<Omit<PhongDto, "danhSachHinhAnh">>({
        tenPhong: "",
        giaPhong: 0,
        sucChua: 0,
        soPhong: 0,
        moTa: "",
        loaiPhong: { idLoaiPhong: 0 }
    });


    // nhận 4 dữ liệu idLoaiPhong, giaPhong, sucChua, soPhong đưa vào formData
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
            // files chuyển thành mảng (xử lý người dùng chọn nhiều file cùng 1 lúc)
            // e.target.files mặc định là FileList (file giả => k phải file thật nên cần chuyển thành file thật)
            const files = Array.from(e.target.files);
            // Cập nhật thêm mảng file mới vào selectedFiles
            setSelectedFiles((prev) => [...prev, ...files]);
            // tạo ra một URL tạm (kiểu blob:) đại diện cho file ảnh đó đưa vào newPreviews
            const newPreviews = files.map((file) => URL.createObjectURL(file));
            console.log(files)
            console.log(newPreviews)
            // Thêm các URL mới vào previewUrls để hiển thị trong giao diện.
            setPreviewUrls((prev) => [...prev, ...newPreviews]);
        }
        // Xoá giá trị đã chọn trong input file sau khi người dùng chọn ảnh.
        e.target.value = "";
    };

    // tham số file là lặp qua từng selectedFiles tuyền vào đây
    const uploadImage = async (file: File): Promise<HinhAnh> => {
        // Tạo một object FormData mới
        const form = new FormData();
        // "file" là tên trường sẽ gửi đến server 
        // file là object ảnh người dùng vừa chọn.
        form.append("file", file);
        // gửi đến server
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
            // tạo một mảng rỗng để chứa kết quả tenHinhAnh và duongDan là để lưu vào database
            const uploadedImages: HinhAnh[] = [];
            // gởi từng file đến uploadImage để sử lý lưu từng file vào server
            for (const file of selectedFiles) {
                const img = await uploadImage(file);
                uploadedImages.push(img);
            }

            // Gộp tất cả dữ liệu từ form (formData) với danh sách ảnh upload vào fullData 
            const fullData: PhongDto = {
                ...formData,
                danhSachHinhAnh: uploadedImages
            };
            const res = await fetch("http://localhost:8080/api/phong/themPhong", {
                method: "POST",
                // Ê server, dữ liệu tao sắp gửi ở phần body là JSON đó nha!
                headers: { "Content-Type": "application/json" },
                // Chuyển object JavaScript (fullData) thành chuỗi JSON để gửi lên server.
                body: JSON.stringify(fullData)
            });
            if (!res.ok) throw new Error("Gửi thông tin phòng thất bại");
            alert("Thêm phòng thành công!");
        } catch (err) {
            console.error(err);
            alert("Có lỗi xảy ra!");
        }
    };


    // index là vị trí của ảnh trong danh sách ảnh preview
    const handleRemoveImage = (index: number) => {
        // Tạo bản sao của selectedFiles
        const newFiles = [...selectedFiles];
        // Tạo bản sao của previewUrls (các link ảnh dùng để hiển thị preview)
        const newPreviews = [...previewUrls];
        // Xoá 1 phần tử tại vị trí index trong newFile
        newFiles.splice(index, 1);
        // Xoá 1 phần tử tại vị trí index trong newPreviews
        newPreviews.splice(index, 1);
        // Cập nhật lại selectedFiles
        setSelectedFiles(newFiles);
        // Cập nhật lại previewUrls
        setPreviewUrls(newPreviews);
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
            <FooterAdmin />
        </div>
    );
};

export default ThemPhongPage;
