import { useState, useEffect } from 'react';
import {
    Typography,
    Box,
    IconButton,
    Modal,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    useTheme,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useTranslations } from 'next-intl';
import { getCategories } from 'utils/getCategories';
import { ICollection } from 'src/interfaces';
import { TModalWindowCollection } from './ModalWindowCollection.types';

export const ModalWindowCollection: React.FC<TModalWindowCollection> = ({
    userId,
    isModalOpen,
    handleCloseModal,
}) => {
    const initialCollectionData: ICollection = {
        title: '',
        userId: userId,
        description: '',
        category: '',
    };

    const t = useTranslations('ModalWindowCollection');
    const theme = useTheme();
    const [collectionData, setCollectionData] = useState<ICollection>(initialCollectionData);
    const categories = getCategories();
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCollectionData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCategoryChange = (e: SelectChangeEvent<string>) => {
        setCollectionData((prevData) => ({
            ...prevData,
            category: e.target.value,
        }));
    };

    const canSubmitForm = () => {
        return collectionData.title && collectionData.description && collectionData.category;
    };

    const handleCreateCollection = () => {
        console.log('collectionData', collectionData);
        setCollectionData(initialCollectionData);
        handleCloseModal();
    };

    useEffect(() => {
        setIsDisabled(!canSubmitForm());
    }, [collectionData]);

    return (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: theme.palette.background.default,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography
                    sx={{ display: 'flex', justifyContent: 'center', fontWeight: 600 }}
                    variant="h6"
                    component="h2"
                >
                    {t('createCollectionTitle')}
                </Typography>
                <TextField
                    sx={{ mt: 2 }}
                    label={t('collectionTitle')}
                    name="title"
                    value={collectionData.title}
                    onChange={handleInputChange}
                    fullWidth
                    required
                />
                <TextField
                    sx={{ mt: 2 }}
                    label={t('collectionDescription')}
                    name="description"
                    value={collectionData.description}
                    onChange={handleInputChange}
                    fullWidth
                    required
                />
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="collection-category-label">
                        {t('collectionCategory')}
                    </InputLabel>
                    <Select
                        labelId="collection-category-label"
                        value={collectionData.category}
                        onChange={handleCategoryChange}
                        required
                    >
                        {categories.map((category) => {
                            return (
                                <MenuItem key={category.id} value={category.title}>
                                    {category.title}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={handleCreateCollection}
                            disabled={isDisabled}
                        >
                            {t('createCollectionButton')}
                        </Button>
                    </Box>

                    <IconButton
                        aria-label="close"
                        onClick={handleCloseModal}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <Close />
                    </IconButton>
                </Box>
            </Box>
        </Modal>
    );
};
