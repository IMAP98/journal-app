

export const fileUpload = async (file) => {

    // if (!file) throw new Error('File not selected.');
    if (!file) return null;

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dq47ddelq/upload';
    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {

        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('The image could not be uploaded.');

        const cloudResponse = await response.json();

        return cloudResponse.secure_url;

    } catch (error) {

        // console.log(error);

        // throw new Error(error.message);

        return null;

    }

}