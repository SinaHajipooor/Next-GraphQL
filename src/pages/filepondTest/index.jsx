import React, { useState } from 'react'

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'


// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { Box, Card, CardHeader, Divider } from '@mui/material'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageResize, FilePondPluginImageCrop)

// Our app
export default function App() {
    const [files, setFiles] = useState([])


    return (
        <Card>
            <CardHeader subheader='فایل های مورد نظر خود را انتخاب کنید' >
            </CardHeader>
            <Divider />
            <Box width='30%' mt={7}>
                <FilePond
                    imagePreviewHeight={400}
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={20}
                    allowImageTransform
                    imageCropAspectRatio={"1:1"}
                    imageResizeTargetWidth={100}
                    imageResizeTargetHeight={400}
                    imageResizeMode={"cover"}
                    name="files"
                    labelIdle='انتخاب فایل'
                    labelFileProcessingError='خطایی رخ داد'
                    labelTapToRetry='دوباره تلاش کن'
                    styleItemPanelAspectRatio='0.6'
                    itemInsertLocation='after'
                    imagePreviewMarkupShow
                />
            </Box>
        </Card>
    )
}