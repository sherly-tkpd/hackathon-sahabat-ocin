import Portal from '../Portal';
import Makeup from './makeup';
import { useState } from 'react';

import { modalContent, modalOverlay, closeModal, modalHeader, modalTitle, shadePicker } from './style';

const emptyShade = {
  name: 'Clear',
  rgba: null,
  trueTone: 'rgb(255, 255, 255)',
  style: {
    color: 'rgba(0,0,0,0.8)',
    border: '1px solid #e0e0e0',
  }
}

const VirtualMakeUp = ({ onClose, lips = [], shadow = [], skins = [] }) => {
  const [activeSkin, setActiveSkin] = useState(0);
  const [activeLip, setActiveLip] = useState(0);
  const [activeEyeShadow, setActiveEyeShadow] = useState(0);

  const renderLips = [ emptyShade, ...lips ];
  const renderSkin = [ emptyShade, ...skins ];
  const renderShadow = [ emptyShade, ...shadow ];

  return (
    <Portal>
      <div style={modalOverlay}>
        <div style={modalContent}>
          <div style={modalHeader}>
            <h3 style={modalTitle}>Virtual Try-On</h3>
            <button type="button" style={closeModal} onClick={onClose}>
              🅧
            </button>
          </div>
          <Makeup skin={renderSkin?.[activeSkin]?.rgba} lip={renderLips?.[activeLip]?.rgba} eyeShadow={renderShadow?.[activeEyeShadow]?.rgba} />

          <div style={{overflowX: 'auto'}}>
            <div style={{display: 'flex'}}>
              { Boolean(skins.length) && renderSkin.map((each, index) => {
                const active = {...index === activeSkin && {border: '3px solid #555'}}
                return (
                  <div key={index}>
                    <button type="button" style={{...shadePicker, backgroundColor: each.trueTone, ...each?.style, ...active}} onClick={()=>{setActiveSkin(index)}}>{each.name}</button>
                  </div>
                )
              })}
              { Boolean(shadow.length) && renderShadow.map((each, index) => {
                const active = {...index === activeEyeShadow && {border: '3px solid #555'}}
                return (
                  <div key={index}>
                    <button type="button" style={{...shadePicker, backgroundColor: each.trueTone, ...each?.style, ...active}} onClick={()=>{setActiveEyeShadow(index)}}>{each.name}</button>
                  </div>
                )
              })}
              { Boolean(lips.length) && renderLips.map((each, index) => {
                const active = {...index === activeLip && {border: '3px solid #555'}}
                return (
                  <div key={index}>
                    <button type="button" style={{...shadePicker, backgroundColor: each.trueTone, ...each?.style, ...active}} onClick={()=>{setActiveLip(index)}}>{each.name}</button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default VirtualMakeUp;