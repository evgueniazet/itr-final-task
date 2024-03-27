import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TItemCardProps } from './ItemCard.types';

export const ItemCard = ({ item, onEdit, onDelete }: TItemCardProps) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ID: {item.id}
                </Typography>
                {item.tags.length > 0 ? (
                    <Typography variant="body2" color="text.secondary">
                        Tags: {item.tags.join(', ')}
                    </Typography>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No tags
                    </Typography>
                )}
            </CardContent>
            <div>
                <IconButton aria-label="edit" onClick={() => onEdit(item)}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => onDelete(item.id)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </Card>
    );
};