import React from 'react';
import { useForm } from 'react-hook-form';

const ImageUploadForm = () => {
const { 
        register, handleSubmit, getValues, 
        formState: {isSubmitting, isSubmitted, errors}
    } = useForm({mode:"onChange"});

    const updateFile = ({uploadFile}) => {
        // binary: 이미지, 음성, 영상 -> FormData는 binary 객체를 백엔드로 보내기 위한 프로토타입
        // 1. formDatas에 들어가있는 file을 백엔드로 전송
        const formData = new FormData()
        const file1 = uploadFile[0]
        formData.append("uploadFile", file1)

        console.log(file1);
    }

    // const updateFiles = async ({uploadFile}) => {
    //     console.log("uploadFile", uploadFile)
    //     const formData = new FormData()
    //     for(let file of uploadFile){
    //         formData.append("uploadFiles", file)
    //     }

    //     const response = await fetch("http://localhost:10000/private/api/file/upload-files", {
    //         method: "POST",
    //         body: formData,
    //         credentials: "include",
    //     })
        
    //     const {success, message, data} = await response.json()
    //     console.log("success", success)
    //     console.log("message", message)
    //     console.log("data", data)

    // }


    return (
        <div>
            <h2>프로필 수정</h2>
            <form onSubmit={handleSubmit(updateFile)}>
                <input 
                    type="file"
                    // 이미지 여러개 설정
                    accept="image/*"
                    multiple
                    {...register("uploadFile", {required: true})}
                />
                {errors && errors.uploadFile?.type === "required" && <p>이미지 추가하세요</p>}
                <button>프로필 수정</button>
            </form>
            
            로그인 후 접근할 수 있는 마이페이지😎
        </div>
    );
};

export default ImageUploadForm;