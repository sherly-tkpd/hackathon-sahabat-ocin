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
  const [activeState, setActiveState] = useState({
    activeSkin: 0,
    activeLip: 0,
    activeEyeShadow: 0,
  });

  const { activeSkin, activeLip, activeEyeShadow } = activeState;

  const setActiveSkin = val => {
    setActiveState({...activeState, activeSkin: val});
  }

  const setActiveEyeShadow = val => {
    setActiveState({...activeState, activeEyeShadow: val});
  }

  const setActiveLip = val => {
    setActiveState({...activeState, activeLip: val});
  }

  const renderLips = [ emptyShade, ...lips ];
  const renderSkin = [ emptyShade, ...skins ];
  const renderShadow = [ emptyShade, ...shadow ];

  const renderControl = () => {
    const isSkin = Boolean(skins.length);
    const isShadow = Boolean(shadow.length);
    const isLips = Boolean(lips.length);
    const isAll = isSkin && isShadow && isLips;

    if(isAll){
      return renderSkin.map((each, index) => {
        const active = {...index === activeSkin && {border: '4px solid #555'}}
        return (
          <div key={index}>
            <button
              type="button"
              style={{...shadePicker, backgroundColor: each.trueTone, ...each?.style, ...active}}
              onClick={()=>{
                setActiveState({
                  activeSkin: index,
                  activeLip: index,
                  activeEyeShadow: index,
                })
              }}
            >
              {index === 0 ? 'Clear' : 'Apply Set'}
            </button>
          </div>
        )
      });
    }

    if(isSkin){
      return renderSkin.map((each, index) => {
        const active = {...index === activeSkin && {border: '4px solid #555'}}
        return (
          <div key={index}>
            <button type="button" style={{...shadePicker, backgroundColor: each.trueTone, ...each?.style, ...active}} onClick={()=>{setActiveSkin(index)}}>{each.name}</button>
          </div>
        )
      });
    }

    if(isShadow){
      return renderShadow.map((each, index) => {
        const active = {...index === activeEyeShadow && {border: '4px solid #555'}}
        return (
          <div key={index}>
            <button type="button" style={{...shadePicker, backgroundColor: each.trueTone, ...each?.style, ...active}} onClick={()=>{setActiveEyeShadow(index)}}>{each.name}</button>
          </div>
        )
      });
    }

    if(isLips){
      return isLips && renderLips.map((each, index) => {
        const active = {...index === activeLip && {border: '4px solid #555'}}
        return (
          <div key={index}>
            <button type="button" style={{...shadePicker, backgroundColor: each.trueTone, ...each?.style, ...active}} onClick={()=>{setActiveLip(index)}}>{each.name}</button>
          </div>
        )
      });
    }
  }

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

          <div style={{overflowX: 'auto', position: 'absolute', bottom: 0, left: 0, right: 0}}>
            <div style={{display: 'flex'}}>
              {renderControl()}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default VirtualMakeUp;