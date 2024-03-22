import { useState, ChangeEvent } from 'react';
import ReactMarkdown from 'react-markdown';
import { TextField, Box } from '@mui/material';

export const MarkdownEditor = () => {
    const [markdownText, setMarkdownText] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMarkdownText(event.target.value);
    };

    return (
        <Box>
            <TextField
                multiline
                rows={10}
                variant="outlined"
                value={markdownText}
                onChange={handleInputChange}
                fullWidth
                placeholder="Enter Markdown text here..."
            />
            <Box mt={2}>
                <ReactMarkdown>{markdownText}</ReactMarkdown>
            </Box>
        </Box>
    );
};
