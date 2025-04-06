

// "use client"

// import { useState } from "react"
// import { DropdownMenu } from "./Dropdownmenu"

// // Direct imports of images
// import bb from "../../assets/MomentConnection/image.png"
// import cad from "../../assets/centerModule.png"

// const BeamToBeamEndPlate = () => {
//   // State variables
//   const [inputs, setInputs] = useState({})
//   const [allSelected, setAllSelected] = useState(false)
//   const [selectedOption, setSelectedOption] = useState("")
//   const [logs, setLogs] = useState([])
//   const [createDesignReportBool, setCreateDesignReportBool] = useState(false)
//   const [displaySaveInputPopup, setDisplaySaveInputPopup] = useState(false)
//   const [saveInputFileName, setSaveInputFileName] = useState("")
//   const [designPrefModalStatus, setDesignPrefModalStatus] = useState(false)
//   const [activeTab, setActiveTab] = useState("input")
//   const [connectivityType, setConnectivityType] = useState("Coplanar Tension")
//   const [endPlateType, setEndPlateType] = useState("Flushed - Revers")
//   const [showEndPlateDropdown, setShowEndPlateDropdown] = useState(false)
//   const [beamSection, setBeamSection] = useState("Select Section")
//   const [showBeamSectionDropdown, setShowBeamSectionDropdown] = useState(false)
//   const [material, setMaterial] = useState("E 165 (Fe 290)")
//   const [diameterType, setDiameterType] = useState("Customized")
//   const [boltType, setBoltType] = useState("Bearing Bolt")
//   const [propertyClass, setPropertyClass] = useState("All")
//   const [thicknessType, setThicknessType] = useState("All")
//   const [weldType, setWeldType] = useState("Groove Weld")

//   // Menu items for the navbar
//   const MenuItems = [
//     {
//       label: "File",
//       dropdown: [
//         { label: "New", shortcut: "Ctrl+N" },
//         { label: "Open", shortcut: "Ctrl+O" },
//         { label: "Save", shortcut: "Ctrl+S" },
//         { label: "Save As", shortcut: "Ctrl+Shift+S" },
//         { label: "Print", shortcut: "Ctrl+P" },
//         { label: "Exit", shortcut: "Alt+F4" },
//       ],
//     },
//     {
//       label: "Edit",
//       dropdown: [
//         { label: "Cut", shortcut: "Ctrl+X" },
//         { label: "Copy", shortcut: "Ctrl+C" },
//         { label: "Paste", shortcut: "Ctrl+V" },
//       ],
//     },
//     {
//       label: "Graphics",
//       dropdown: [{ label: "Top View" }, { label: "Front View" }, { label: "Side View" }, { label: "3D View" }],
//     },
//     {
//       label: "Database",
//       dropdown: [{ label: "Import" }, { label: "Export" }],
//     },
//     {
//       label: "Help",
//       dropdown: [{ label: "About" }, { label: "Manual" }, { label: "FAQ" }],
//     },
//   ]

//   return (
//     <div className="container">
//       <div className="module_nav">
//         {MenuItems.map((item, index) => (
//           <DropdownMenu
//             key={index}
//             label={item.label}
//             dropdown={item.dropdown}
//             setDesignPrefModalStatus={setDesignPrefModalStatus}
//             inputs={inputs}
//             setInputs={setInputs}
//             allSelected={allSelected}
//             setAllSelected={setAllSelected}
//             selectedOption={selectedOption}
//             setSelectedOption={setSelectedOption}
//             logs={logs}
//             setCreateDesignReportBool={setCreateDesignReportBool}
//             setDisplaySaveInputPopup={setDisplaySaveInputPopup}
//             setSaveInputFileName={setSaveInputFileName}
//           />
//         ))}

//         {displaySaveInputPopup && (
//           <span id="save-input-style">
//             <strong>Saved input file as &quot; {saveInputFileName} &quot;</strong>
//           </span>
//         )}
//       </div>

//       <div className="superMainBody">
//         {/* Left Section - Input Dock */}
//         <div className="subMainBody input-dock">
//           <div className="dock-header">Input Dock</div>
//           <div className="scroll-data">
//             <div>
//               <h3>Connecting Members</h3>
//               <div className="input-cont">
//                 <h5>Connectivity *</h5>
//                 <div>
//                   <select
//                     className="input-design-pref"
//                     value={connectivityType}
//                     onChange={(e) => setConnectivityType(e.target.value)}
//                   >
//                     <option>Coplanar Tension</option>
//                     <option>Coplanar Tension-Compression Flange</option>
//                     <option>Coplanar Tension Flange</option>
//                     <option>Coplanar Compression Flange</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="input-cont">
//                 <h5>End Plate Type *</h5>
//                 <div>
//                   <select
//                     className="input-design-pref"
//                     value={endPlateType}
//                     onChange={(e) => setEndPlateType(e.target.value)}
//                   >
//                     <option>Flushed - Revers</option>
//                     <option>Flushed - Reversible Moment</option>
//                     <option>Extended One Way - Irreversible Moment</option>
//                     <option>Extended Both Ways - Reversible Moment</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="connection-diagram">
//               <img src={bb || "/placeholder.svg"} alt="Connection Diagram" />
//             </div>

//             <div className="input-cont">
//               <h5>Beam Section *</h5>
//               <div>
//                 <select
//                   className="input-design-pref"
//                   value={beamSection}
//                   onChange={(e) => setBeamSection(e.target.value)}
//                 >
//                   <option>Select Section</option>
//                   <option>JB 150</option>
//                   <option>JB 175</option>
//                   <option>JB 200</option>
//                   <option>JB 225</option>
//                 </select>
//               </div>
//             </div>

//             <div className="input-cont">
//               <h5>Material *</h5>
//               <div>
//                 <select className="input-design-pref" value={material} onChange={(e) => setMaterial(e.target.value)}>
//                   <option>E 165 (Fe 290)</option>
//                 </select>
//               </div>
//             </div>

//             <h3>Factored Loads</h3>
//             <div className="input-cont">
//               <h5>Bending Moment (kN)</h5>
//               <input type="text" className="input-design-pref" />
//             </div>

//             <div className="input-cont">
//               <h5>Shear Force (kN) *</h5>
//               <input type="text" className="input-design-pref" />
//             </div>

//             <div className="input-cont">
//               <h5>Axial Force (kN)</h5>
//               <input type="text" className="input-design-pref" />
//             </div>

//             <h3>Bolt</h3>
//             <div className="input-cont">
//               <h5>Diameter (mm) *</h5>
//               <div>
//                 <select
//                   className="input-design-pref"
//                   value={diameterType}
//                   onChange={(e) => setDiameterType(e.target.value)}
//                 >
//                   <option>Customized</option>
//                 </select>
//               </div>
//             </div>

//             <div className="input-cont">
//               <h5>Type *</h5>
//               <div>
//                 <select className="input-design-pref" value={boltType} onChange={(e) => setBoltType(e.target.value)}>
//                   <option>Bearing Bolt</option>
//                 </select>
//               </div>
//             </div>

//             <div className="input-cont">
//               <h5>Property Class *</h5>
//               <div>
//                 <select
//                   className="input-design-pref"
//                   value={propertyClass}
//                   onChange={(e) => setPropertyClass(e.target.value)}
//                 >
//                   <option>All</option>
//                 </select>
//               </div>
//             </div>

//             <h3>End Plate</h3>
//             <div className="input-cont">
//               <h5>Thickness (mm) *</h5>
//               <div>
//                 <select
//                   className="input-design-pref"
//                   value={thicknessType}
//                   onChange={(e) => setThicknessType(e.target.value)}
//                 >
//                   <option>All</option>
//                 </select>
//               </div>
//             </div>

//             <h3>Weld</h3>
//             <div className="input-cont">
//               <h5>Type *</h5>
//               <div>
//                 <select className="input-design-pref" value={weldType} onChange={(e) => setWeldType(e.target.value)}>
//                   <option>Groove Weld</option>
//                 </select>
//               </div>
//             </div>

//             <div className="inputdock-btn">
//               <button className="btn">Reset</button>
//               <button className="btn">Design</button>
//             </div>
//           </div>
//         </div>

//         {/* Middle Section - CAD */}
//         <div className="cad-container">
//           <div className="cad-view">
//             <img src={cad || "/placeholder.svg"} alt="3D Model" className="cad-image" />
//           </div>
//         </div>

//         {/* Right Section - Output Dock */}
//         <div className="subMainBody output-dock">
//           <div className="dock-header">Output Dock</div>
//           <div className="scroll-data">
//             <h3>Critical Bolt Design</h3>
//             <div className="input-cont">
//               <h5>Diameter (mm)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Property Class</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Shear Demand (kN)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Shear Capacity (kN)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Bearing Capacity (kN)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>βs</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Bolt Capacity</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Tension Due to Moment (kN)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Prying Force (kN)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Tension Demand (kN)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Tension Capacity (kN)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Combined Capacity, I.R</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <h3>Detailing</h3>
//             <div className="input-cont">
//               <h5>No. of Bolts</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>No. of Columns</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>No. of Rows</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Pitch Distance (mm)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Gauge Distance (mm)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>Cross-centre Gauge (mm)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="input-cont">
//               <h5>End Distance (mm)</h5>
//               <input type="text" className="output-field" readOnly />
//             </div>

//             <div className="outputdock-btn">
//               <button className="btn">Create Design Report</button>
//               <button className="btn">Save Output</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BeamToBeamEndPlate

"use client"

import { useState } from "react"
import { DropdownMenu } from "./Dropdownmenu"

// Direct imports of images
import bb from "../../assets/MomentConnection/image.png"
import cad from "../../assets/centerModule.png"

const BeamToBeamEndPlate = () => {
// State variables
const [inputs, setInputs] = useState({})
const [allSelected, setAllSelected] = useState(false)
const [selectedOption, setSelectedOption] = useState("")
const [logs, setLogs] = useState([])
const [createDesignReportBool, setCreateDesignReportBool] = useState(false)
const [displaySaveInputPopup, setDisplaySaveInputPopup] = useState(false)
const [saveInputFileName, setSaveInputFileName] = useState("")
const [designPrefModalStatus, setDesignPrefModalStatus] = useState(false)
const [activeTab, setActiveTab] = useState("input")
const [connectivityType, setConnectivityType] = useState("Coplanar Tension")
const [endPlateType, setEndPlateType] = useState("Flushed - Reversible Movement")
const [showEndPlateDropdown, setShowEndPlateDropdown] = useState(false)
const [beamSection, setBeamSection] = useState("Select Section")
const [showBeamSectionDropdown, setShowBeamSectionDropdown] = useState(false)
const [material, setMaterial] = useState("E 165 (Fe 290)")
const [diameterType, setDiameterType] = useState("Customized")
const [boltType, setBoltType] = useState("Bearing Bolt")
const [propertyClass, setPropertyClass] = useState("All")
const [thicknessType, setThicknessType] = useState("All")
const [weldType, setWeldType] = useState("Groove Weld")

// Menu items for the navbar
const MenuItems = [
{
label: "File",
dropdown: [
{ label: "New", shortcut: "Ctrl+N" },
{ label: "Open", shortcut: "Ctrl+O" },
{ label: "Save", shortcut: "Ctrl+S" },
{ label: "Save As", shortcut: "Ctrl+Shift+S" },
{ label: "Print", shortcut: "Ctrl+P" },
{ label: "Exit", shortcut: "Alt+F4" },
],
},
{
label: "Edit",
dropdown: [
{ label: "Cut", shortcut: "Ctrl+X" },
{ label: "Copy", shortcut: "Ctrl+C" },
{ label: "Paste", shortcut: "Ctrl+V" },
],
},
{
label: "Graphics",
dropdown: [{ label: "Top View" }, { label: "Front View" }, { label: "Side View" }, { label: "3D View" }],
},
{
label: "Database",
dropdown: [{ label: "Import" }, { label: "Export" }],
},
{
label: "Help",
dropdown: [{ label: "About" }, { label: "Manual" }, { label: "FAQ" }],
},
]

return (
<div className="container">
<div className="module_nav">
{MenuItems.map((item, index) => (
<DropdownMenu
key={index}
label={item.label}
dropdown={item.dropdown}
setDesignPrefModalStatus={setDesignPrefModalStatus}
inputs={inputs}
setInputs={setInputs}
allSelected={allSelected}
setAllSelected={setAllSelected}
selectedOption={selectedOption}
setSelectedOption={setSelectedOption}
logs={logs}
setCreateDesignReportBool={setCreateDesignReportBool}
setDisplaySaveInputPopup={setDisplaySaveInputPopup}
setSaveInputFileName={setSaveInputFileName}
/>
))}


    {displaySaveInputPopup && (
      <span id="save-input-style">
        <strong>Saved input file as &quot; {saveInputFileName} &quot;</strong>
      </span>
    )}
  </div>

  <div className="superMainBody">
    {/* Left Section - Input Dock */}
    <div className="subMainBody input-dock">
      <div className="dock-header">Input Dock</div>
      <div className="scroll-data">
        <div>
          <h3>Connecting Members</h3>
          <div className="input-cont">
            <h5>Connectivity *</h5>
            <div>
              <select
                className="input-design-pref"
                value={connectivityType}
                onChange={(e) => setConnectivityType(e.target.value)}
              >
                <option>Coplanar Tension</option>
                <option>Coplanar Tension-Compression Flange</option>
                <option>Coplanar Tension Flange</option>
                <option>Coplanar Compression Flange</option>
              </select>
            </div>
          </div>

          <div className="input-cont">
            <h5>End Plate Type *</h5>
            <div>
              <select
                className="input-design-pref"
                value={endPlateType}
                onChange={(e) => setEndPlateType(e.target.value)}
              >

                <option>Flushed - Reversible Moment</option>
                <option>Extended One Way - Irreversible Moment</option>
                <option>Extended Both Ways - Reversible Moment</option>
              </select>
            </div>
          </div>
        </div>

        <div className="connection-diagram">
          <img src={bb || "/placeholder.svg"} alt="Connection Diagram" />
        </div>

        <div className="input-cont">
          <h5>Beam Section *</h5>
          <div>
            <select
              className="input-design-pref"
              value={beamSection}
              onChange={(e) => setBeamSection(e.target.value)}
            >
              <option>Select Section</option>
              <option>JB 150</option>
              <option>JB 175</option>
              <option>JB 200</option>
              <option>JB 225</option>
            </select>
          </div>
        </div>

        <div className="input-cont">
          <h5>Material *</h5>
          <div>
            <select className="input-design-pref" value={material} onChange={(e) => setMaterial(e.target.value)}>
              <option>E 165 (Fe 290)</option>
              <option>E 250 (Fe 410 W)A</option>
              <option>E 250 (Fe 410 W)B</option>
              <option>E 250 (Fe 410 W)C</option>
              <option>E 300 (Fe 440)</option>
            </select>
          </div>
        </div>

        <h3>Factored Loads</h3>
        <div className="input-cont">
          <h5>Bending Moment (kN)</h5>
          <input type="text" className="input-design-pref" />
        </div>

        <div className="input-cont">
          <h5>Shear Force (kN) *</h5>
          <input type="text" className="input-design-pref" />
        </div>

        <div className="input-cont">
          <h5>Axial Force (kN)</h5>
          <input type="text" className="input-design-pref" />
        </div>

        <h3>Bolt</h3>
        <div className="input-cont">
          <h5>Diameter (mm) *</h5>
          <div>
            <select
              className="input-design-pref"
              value={diameterType}
              onChange={(e) => setDiameterType(e.target.value)}
            >
               <option>All</option>
              <option>Customized</option>
            </select>
          </div>
        </div>

        <div className="input-cont">
          <h5>Type *</h5>
          <div>
            <select className="input-design-pref" value={boltType} onChange={(e) => setBoltType(e.target.value)}>
              <option>Bearing Bolt</option>
              <option>Friction Grip Bolt</option>
            </select>
          </div>
        </div>

        <div className="input-cont">
          <h5>Property Class *</h5>
          <div>
            <select
              className="input-design-pref"
              value={propertyClass}
              onChange={(e) => setPropertyClass(e.target.value)}
            >
              <option>All</option>
              <option>Customized</option>
            </select>
          </div>
        </div>

        <h3>End Plate</h3>
        <div className="input-cont">
          <h5>Thickness (mm) *</h5>
          <div>
            <select
              className="input-design-pref"
              value={thicknessType}
              onChange={(e) => setThicknessType(e.target.value)}
            >
              <option>All</option>
              <option>Customized</option>
            </select>
          </div>
        </div>

        <h3>Weld</h3>
        <div className="input-cont">
          <h5>Type *</h5>
          <div>
            <select className="input-design-pref" value={weldType} onChange={(e) => setWeldType(e.target.value)}>
              <option>Groove Weld</option>
            </select>
          </div>
        </div>

        <div className="inputdock-btn">
          <button className="btn">Reset</button>
          <button className="btn">Design</button>
        </div>
      </div>
    </div>

    {/* Middle Section - CAD */}
    <div className="cad-container">
      <div className="cad-view">
        <img src={cad || "/placeholder.svg"} alt="3D Model" className="cad-image" />
      </div>
    </div>

    {/* Right Section - Output Dock */}
    <div className="subMainBody output-dock">
      <div className="dock-header">Output Dock</div>
      <div className="scroll-data">
        <h3>Critical Bolt Design</h3>
        <div className="input-cont">
          <h5>Diameter (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Property Class</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Shear Demand (kN)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Shear Capacity (kN)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Bearing Capacity (kN)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>βs</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Bolt Capacity</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Tension Due to Moment (kN)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Prying Force (kN)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Tension Demand (kN)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Tension Capacity (kN)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Combined Capacity, I.R</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <h3>Detailing</h3>
        <div className="input-cont">
          <h5>No. of Bolts</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>No. of Columns</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>No. of Rows</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Pitch Distance (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Gauge Distance (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Cross-centre Gauge (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>End Distance (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Edge Distance (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Typical Detailing</h5>
          <button className="btn details-btn">Details</button>
        </div>

        <h3>End Plate</h3>
        <div className="input-cont">
          <h5>Thickness (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Height (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Width (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Moment Capacity (kNm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <h3>Stiffener Plate</h3>
        <div className="input-cont">
          <h5>Dimensions</h5>
          <button className="btn details-btn">Details</button>
        </div>

        <div className="input-cont">
          <h5>Typical Sketch</h5>
          <button className="btn details-btn">Details</button>
        </div>

        <h3>Weld</h3>
        <div className="input-cont">
          <h5>Weld at Web</h5>
        </div>

        <div className="input-cont">
          <h5>Size (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Total Length (mm)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Stress (N/mm²)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Combined Stress (N/mm²)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Strength (N/mm²)</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Weld at Flange</h5>
        </div>

        <div className="input-cont">
          <h5>Type</h5>
          <input type="text" className="output-field" readOnly />
        </div>

        <div className="input-cont">
          <h5>Typical Sketch</h5>
          <button className="btn details-btn">Details</button>
        </div>

        <div className="outputdock-btn">
          <button className="btn">Create Design Report</button>
          <button className="btn">Save Output</button>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default BeamToBeamEndPlate