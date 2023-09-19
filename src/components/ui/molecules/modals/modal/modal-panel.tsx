import * as AlertDialog from '@radix-ui/react-alert-dialog';
import React, { useState } from 'react';
import styles from './modal-panel.module.scss';

interface ModalPanelProps {
  children: any,
  openModal: any,
  setOpenModal: any,
}

const ModalPanel:React.FC<ModalPanelProps> = ({
  children, openModal, setOpenModal
}) => {
  return (
    <AlertDialog.Root open={openModal} onOpenChange={setOpenModal} >
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.AlertDialogOverlay} onClick={() => setOpenModal(false)}/>
        <AlertDialog.Content className={styles.AlertDialogContent}>
          {children}
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default ModalPanel;
