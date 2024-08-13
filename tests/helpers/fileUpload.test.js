import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
    cloud_name: 'dq47ddelq',
    api_key: '777621559275227',
    api_secret: 'AxwuyM6VcpYqfq-Gxmth6i6lA24',
    secure: true
});

describe('Tests in fileUpload', () => {

    test('Should upload the file successfully to cloudinary', async () => {

        const imageUrl = 'https://www.shutterstock.com/image-photo/mysterious-forest-night-pine-flashlightlong-600nw-2117650202.jpg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'dark_forest.jpg');

        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // console.log(url);

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        // console.log(imageId);

        await cloudinary.api.delete_resources([imageId], { resource_type: 'image' });

    });

    test('Should return null', async () => {

        const file = new File([], 'dark_forest.jpg');

        const url = await fileUpload(file);

        expect(url).toBe(null);

    });

});
