import React,{Fragment} from 'react'
import Sider2 from './Components/Sider2';
import {Routes,Route,Navigate,BrowserRouter} from 'react-router-dom'
import { MuiButtons } from "./Components/MuiButtons";
import MuiTextField from './Components/MuiTextField'
import MuiRadioButton from './Components/MuiRadioButton'
import MuiSwitchButton from "./Components/MuiSwitchButton";
import MuiImageList from "./Components/MuiImageList";
import MuiRating from "./Components/MuiRating";
import MuiCard from "./Components/MuiCard";
import Typographies from "./Components/Typographies";
import MuiToggleButtons from "./Components/MuiToggleButtons";
import MuiSelect from "./Components/MuiSelect";
import MuiCheckBoxes from "./Components/MuiCheckBoxes";
import MuiAutoComplete from "./Components/MuiAutoComplete";
import MuiBox from "./Components/MuiBox";
import MuiStack from "./Components/MuiStack";
import MuiGrid from "./Components/MuiGrid";
import MuiPaper from "./Components/MuiPaper";
import MuiAccordian from "./Components/MuiAccordian";
import MuiNavbar from "./Components/MuiNavbar";

import MuiNavBarWithMenuOptions from './Components/MuiNavBarWithMenuOptions';
import MuiLink from './Components/MuiLink'
import MuiBreadCrumb from './Components/MuiBreadCrumb'
import MuiDrawer from "./Components/MuiDrawer";
import MuiSpeedDial from "./Components/MuiSpeedDial";
import MuiBottomNavigation from './Components/MuiBottomNavigation'

import MuiAvatar from './Components/MuiAvatar'
import MuiBatch from "./Components/MuiBatch";
import MuiList from "./Components/MuiList";
import MuiChips from "./Components/MuiChips";
import MuiToolTip from './Components/MuiToolTip'
import MuiDynamicField from "./Components/MuiDynamicField";
import TagRule from "./Components/TagRule";
import MuiTable from './Components/MuiTable';

import MuiDatePIcker from './Components/MuiDatePIcker';
import AntDateRangePicker from './Components/AntDateRangePicker';
import MuiTable2 from './Components/MuiTable2';
import MuiAlert from './Components/MuiAlert'
import MuiSnackBar from './Components/MuiSnackBar'
import MuiDialog from './Components/MuiDialog'
import MuiProgress from './Components/MuiProgress'
import MuiSkeleton from './Components/MuiSkeleton'



function App2(){
    return(
        <Fragment>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/design/buttons" replace />} />
                
                <Route path='/design/typographies' element={<Sider2 children={<Typographies/>} />} />
                <Route path='/design/toggle-buttons' element={<Sider2 children={<MuiToggleButtons/>} />} />
                <Route path='/design/select' element={<Sider2 children={<MuiSelect/>} />} />
                <Route path='/design/checkbox' element={<Sider2 children={<MuiCheckBoxes/>} />} />
                <Route path='/design/autocomplete' element={<Sider2 children={<MuiAutoComplete/>} />} />
                <Route path='/design/box'   element={<Sider2 children={<MuiBox/>} />} />
                <Route path='/design/stack' element={<Sider2 children={<MuiStack/>} />} />
                <Route path='/design/grid' element={<Sider2 children={<MuiGrid/>} />} />
                <Route path='/design/paper' element={<Sider2 children={<MuiPaper/>} />} />
                <Route path='/design/accordian' element={<Sider2 children={<MuiAccordian/>} />} />
                <Route path='/design/navbar' element={<Sider2 children={<MuiNavbar/>} />} />

                <Route path='/design/buttons' element={<Sider2 children={<MuiButtons/>} />} />
                <Route path='/design/radio' element={<Sider2 children={<MuiRadioButton/>} />} />
                <Route path='/design/card' element={<Sider2 children={<MuiCard/>} />} />
                <Route path='/design/imageList' element={<Sider2 children={<MuiImageList/>} />} />
                <Route path='/design/rating' element={<Sider2 children={<MuiRating/>} />} />
                <Route path='/design/textfield' element={<Sider2 children={<MuiTextField/>} />} />
                <Route path='/design/switch' element={<Sider2 children={<MuiSwitchButton/>} />} />

                <Route path='/design/menu-navbar' element={<Sider2 children={<MuiNavBarWithMenuOptions/>} />} />
                <Route path='/design/link' element={<Sider2 children={<MuiLink/>} />} />
                <Route path='/design/breadcrumb' element={<Sider2 children={<MuiBreadCrumb/>} />} />
                <Route path='/design/drawer' element={<Sider2 children={<MuiDrawer/>} />} />
                <Route path='/design/speed-dial' element={<Sider2 children={<MuiSpeedDial/>} />} />
                <Route path='/design/bottom-navigation' element={<Sider2 children={<MuiBottomNavigation/>} />} />
            
                <Route path='/design/avatar' element={<Sider2 children={<MuiAvatar/>}/>}/>
                <Route path='/design/batch' element={<Sider2 children={<MuiBatch/>}/>}/>
                <Route path='/design/list' element={<Sider2 children={<MuiList/>}/>}/>
                <Route path='/design/chips' element={<Sider2 children={<MuiChips/>}/>}/>
                <Route path='/design/tooltip' element={<Sider2 children={<MuiToolTip/>}/>}/>
                <Route path='/design/dynamic-field' element={<Sider2 children={<MuiDynamicField/>}/>}/>
                <Route path='/design/tag-rule' element={<Sider2 children={<TagRule/>}/>}/>
                <Route path='/design/data-table' element={<Sider2 children={<MuiTable/>}/>}/>

                <Route path='/design/mui-dates' element={<Sider2 children={<MuiDatePIcker/>}/>}/>
                <Route path='/design/date-range-picker' element={<Sider2 children={<AntDateRangePicker/>}/>}/>

                <Route path='/design/mui-table' element={<Sider2 children={<MuiTable2/>}/>}/>
                <Route path='/design/mui-alert' element={<Sider2 children={<MuiAlert/>}/>}/>
                <Route path='/design/mui-snackbar' element={<Sider2 children={<MuiSnackBar/>}/>}/>
                <Route path='/design/mui-dialog' element={<Sider2 children={<MuiDialog/>}/>}/>
                <Route path='/design/mui-progress' element={<Sider2 children={<MuiProgress/>}/>}/>
                <Route path='/design/mui-skeleton' element={<Sider2 children={<MuiSkeleton/>}/>}/>
                
                <Route path='/design/mui-skeleton' element={<Sider2></Sider2>}/>
            </Routes>
        </BrowserRouter>
        </Fragment>
    )
}
export default App2;