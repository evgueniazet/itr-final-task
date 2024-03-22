import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
    accessToken:
        'sl.Bx4Dm1Ej3dwVcigbCJwsBkxNc4wC9t4-ADB1_591y8YbMoqt5rm2_D3AHdRVnQTcxTXZtZj8-EyyrKeLKhC_07WPFZHjnaAQph6gb4EMBfsqIJFX1Yw-Ce4Wm_JxVbl4FnonLefgyubg',
});

export const uploadImageToDropbox = async (imageContent: ArrayBuffer, imageName: string) => {
    const imagePath = `/images/${imageName}`;
    try {
        await dbx.filesUpload({
            path: imagePath,
            contents: imageContent,
        });
        const response = await dbx.filesGetTemporaryLink({ path: imagePath });
        const imageUrl = response.result.link;
        
        return imageUrl;
    } catch (error) {
        console.error('Error uploading image to Dropbox:', error);
    }
};
