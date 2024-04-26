import React from 'react';
import "./RDV.css";

import { FiX } from 'react-icons/fi';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';




const RDV = (props) => {
    return (
        <div className="RDV-container" id='RDV'>

            <div className='RDV' >

                <FiX className='closeicon' onClick={() => props.closeRDV()} />
                <div className='left-popup'>
                   
                    <img src={props.psy.img} alt="" />
                    <div>
                        <h1>Plus d'informations:</h1>
                        <p>{props.psy.nom}</p>
                        <p>{props.psy.adresse}, {props.psy.ville}</p>
                        <p>{props.psy.telephone}</p>
                    </div>
                    <p>Sélectionnez la date qui vous convient !</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker slotProps={{ textField: { size: 'small' } }} />
                    </LocalizationProvider>
                </div>
                <div className='right-popup'>
                    <p>Quelque chose à ajouter?<br/> Parlez-nous en !</p>
                </div>


            </div>
        </div>
    )
}

export default RDV;
