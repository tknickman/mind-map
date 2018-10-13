import React from 'react';
import {Label} from '../label/label';
import './block.css';

export let Block = ({id, value, blocks, hasChildren, isEditMode, updateLabel, updateAndCloseLabel, switchLabelToEditMode, createNewBlock}) => {
    let renderBlocks = (id) => (
        blocks.filter(({parentID}) => parentID === id)
        .map(block => (
            <Block 
                key={block.id} 
                {...block} 
                blocks={blocks} 
                updateLabel={updateLabel}
                updateAndCloseLabel={updateAndCloseLabel}
                switchLabelToEditMode={switchLabelToEditMode}
                createNewBlock={createNewBlock} 
            />
        ))
    );

    return (
        <div className="block">
            <div className="block--data-container">
                <Label 
                    id={id}
                    value={value}
                    isEditMode={isEditMode} 
                    hasChildren={hasChildren}
                    updateLabel={updateLabel} 
                    updateAndCloseLabel={updateAndCloseLabel}
                    switchLabelToEditMode={switchLabelToEditMode}
                />
            </div>
            
            {hasChildren && (
                <div className="block--children">
                    <div className="block--background"></div>
                    {hasChildren && renderBlocks(id)}
                </div>
            )}
        
        </div>
    )
}