//Edit this file and export this in App.tsx
import React, { useEffect, useState } from "react";
import {
  RdsButton,
  RdsCheckbox,
  RdsInput,
  // RdsInputGroup,
  RdsLabel,
  RdsSelectList,
} from "raaghu-react-elements";
import { RdsCompDatatable } from "../../../rds-components";
import RdsInputGroup from "../../../../../raaghu-elements/src/rds-input-group";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";

import {
  GetAllNewsLetters, preferencesData
} from "../../../../libs/state-management/newsletters/newsletters-slice";

const Newsletters = (props: any) => {
   const dispatch = useAppDispatch();
   const newsletters = useAppSelector((state) => state.persistedReducer.newsletters);
  const [NewsLetterData, setNewsLetterData] = useState({
    preference: "",
  });
  const prefenceList:[] = [];
  const preferenceChange = (event: any) => {
    setNewsLetterData({ ...NewsLetterData, preference: event });
  };
  const tableHeaders = [
    {
      displayName: "Details",
      key: "details",
      datatype: "text",
      sortable: true,
      required: true,
      dataLength: 30,
    },
    {
      displayName: "E-mail Address",
      key: "emailaddress",
      datatype: "text",
      sortable: true,
      required: true,
      dataLength: 30,
    },
    {
      displayName: "Creation Time",
      key: "creationtime",
      datatype: "text",
      sortable: true,
      required: true,
      dataLength: 30,
    },
  ];
  const [getDataPolls, setGetDataPolls] = useState<any>([
    {
      details: "test details",
      emailaddress: "demo@waiin.com",
      creationtime: "12/12/12",
    },
  ]);

  useEffect(() => {
    dispatch(GetAllNewsLetters({preference:undefined, source:undefined}) as any);
  }, [dispatch]);
  const [newsLettersData, setNewsLettersData] = useState<any>([]);
  useEffect(() => {
    let temp: any[] = [];
    if (newsletters.GetAllNewsLetters.items) {
      newsletters.GetAllNewsLetters.items.map((res: any) => {
        const item = {
          details: res.details,
          emailaddress:res.emailaddress,
          creationtime:res.creationtime,
        };
        temp.push(item);
      });
      setNewsLettersData(temp);
    }
  }, [newsletters.GetAllNewsLetters]);

  useEffect(()=>{
    debugger
    
  },[dispatch])
  function inputValueFn(data:any){
    let data1 = {
      preference: "",
      source: data,
      skipCount: 0,
      maxResultCount: 10
    }
    dispatch(GetAllNewsLetters(data1) as any);
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-5 mx-3 mt-1">
          <RdsLabel class="" label="Preference" size="14px"></RdsLabel>
          <RdsSelectList
            label="Select Roles"
            selectItems={prefenceList}
            size="lg"
            onSelectListChange={(e: any) => preferenceChange(e.target.value)}
          ></RdsSelectList>
        </div>
        <div className="col-md-5 mt-2 h-68  ">
        
          <RdsInputGroup 
            buttonColorVariant="primary"
            inputGroupLabel="Source"
            icon="refresh_sync" 
            iconHeight="15px"
            iconWidth="15px"
            iconFill={false}
            iconStroke={true}
            iconColorVariant="light"
            inputValue={inputValueFn}
            outline={false}
            placeholder="Source"
            
          />
        </div>
      </div>

      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
          tableHeaders={tableHeaders}
          tableData={newsLettersData}
          pagination={true}
          recordsPerPage={10}
          recordsPerPageSelectListOption={true}
        ></RdsCompDatatable>
      </div>
    </div>
  );
};

export default Newsletters;

