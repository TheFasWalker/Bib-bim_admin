export const getFileExtension =(fileName:string):string=>{
    const lastDotIndex = fileName.lastIndexOf('.');
    if (lastDotIndex === -1) {
        return '';
    }
    return fileName.substring(lastDotIndex).toLowerCase();
}