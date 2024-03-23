import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
    accessToken:
        'sl.Bx4pBPanHjIFGcnORSelo9ak4POABXnnhPgU2p3Lw4zEm5Pkmbuxo8MyK33RQ2zRZQKA9vmOkSNs8iyaA42kXIg4w5eJnCkqCh8LE_e8AgIyWLj446uKi_9Ur3gisz2aNwBonESqWxU0',
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
