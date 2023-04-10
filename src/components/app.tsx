import "./app.css"
//@ts-ignore
import logo from "../assets/jtr.png"
import { createContext, useContext, useState } from "react"

enum Period {
  wtd, mtd, ytd
}

const selectionContext = createContext<[Period, React.Dispatch<React.SetStateAction<Period>>]>([Period.wtd, () => null])

function App() {
  const [selection, setSelection] = useState(Period.wtd)
  return (
    <div style={{ height: "100%", width: "100%", boxSizing: "border-box", minWidth: "fit-content"}}>
      <div style={{display: 'flex', justifyContent: "space-around", alignItems: "center", textAlign: "center", fontSize: "1.2em",background: "linear-gradient(to right, darkorange, orange)" }}>
        <div style={{ fontWeight: "bold", width: "100%" }}>KPI Rankings</div>
        <img src={logo} style={{width: "4em"}}/>
        <div style={{ fontFamily: "monospace", width: "100%"}}>Updated: <span style={{background: "white", padding: ".1em .4em", borderRadius: "10em"}}>19/09/2023</span></div>
      </div>
      <div style={{ width: "100%", background: "white", boxSizing: "border-box", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", boxSizing: "border-box", height: "3em", width: "100%", justifyContent: "space-evenly", alignItems: "center", borderBottom: "1px solid gray", borderTop: "1px solid gray" }}>
          <selectionContext.Provider value={[selection, setSelection]}>
            <PeriodOption id={Period.wtd}  title='Week' />
            <PeriodOption id={Period.mtd} title='Month' />
            <PeriodOption id={Period.ytd} title='Season' />
          </selectionContext.Provider>
        </div>
      </div>
      <div className="gridboard">
        <GridBlock area="ptg" children={PTG()} />
        <GridBlock area="ads" children={ADS()} />
        <GridBlock area="sph" children={SPH()} />
        <GridBlock area="upt" children={UPT()} />
        <GridBlock area="don" children={DON()} />
        <GridBlock area="emc" children={EMC()} />
        <GridBlock area="ovr" children={OVR()}/>
        </div>
    </div>
  )
}


function PeriodOption(props: { id: Period, title: string }) {
  const [selection, setSelection] = useContext(selectionContext)
  return (
    <div className='period-option' style={props.id == selection ? {background: "whitesmoke", color: "black"} : {}} onClick={()=>setSelection(props.id)}>
      {props.title}
    </div>
  )
}



function GridBlock(props: {children: string | JSX.Element, area: string }) {
  return (
    <div className={"block  "+props.area}>
      {props.children}
    </div>
  )
}
function OVR() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1em"}}>
      <div style={{ fontWeight: "bold"}}>Overall</div>
      <div style={{ width: "100%", padding: "1em", boxSizing: "border-box" }}>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>1.</div>
          <div style={{fontWeight: "bold"}}>68561</div>
          <div style={{fontFamily: "monospace", textAlign: "right", fontWeight: "bold"}}>$30</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>2.</div>
          <div>68549</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$20</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>3.</div>
          <div>68529</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$10</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>4.</div>
          <div>68547</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$0</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>5.</div>
          <div>68552</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$0</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>6.</div>
          <div>68511</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$0</div>
        </div>
      </div>
    </div>
  )
}

function PTG() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1em"}}>
      <div style={{ fontWeight: "bold"}}>Percentage to Goal (+%)</div>
      <div style={{ width: "100%", padding: "1em", boxSizing: "border-box" }}>
        <div className="leadrow" style={{fontSize: "1.4em"}}>
          <div style={{fontWeight: "bold"}}>1.</div>
          <div style={{fontWeight: "bold"}}>68561</div>
          <div style={{fontFamily: "monospace", textAlign: "right", fontWeight: "bold"}}>+1.988%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>2.</div>
          <div>68549</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+1.708%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>3.</div>
          <div>68529</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+1.702%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>4.</div>
          <div>68547</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+1.630%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>5.</div>
          <div>68552</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+1.612%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>6.</div>
          <div>68511</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+1.608%</div>
        </div>
      </div>
    </div>
  )
}

function ADS() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1em"}}>
      <div style={{ fontWeight: "bold"}}>Average Dollar Sale ($)</div>
      <div style={{ width: "100%", padding: "1em", boxSizing: "border-box" }}>
        <div className="leadrow" style={{fontSize: "1.4em"}}>
          <div style={{fontWeight: "bold"}}>1.</div>
          <div style={{fontWeight: "bold"}}>68561</div>
          <div style={{fontFamily: "monospace", textAlign: "right", fontWeight: "bold"}}>$62.87</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>2.</div>
          <div>68549</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$59.09</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>3.</div>
          <div>68529</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$58.88</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>4.</div>
          <div>68547</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$56.01</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>5.</div>
          <div>68552</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$52.41</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>6.</div>
          <div>68511</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$52.05</div>
        </div>
      </div>
    </div>
  )
}
function SPH() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1em"}}>
      <div style={{ fontWeight: "bold"}}>Sales to Payroll Hours ($/H)</div>
      <div style={{ width: "100%", padding: "1em", boxSizing: "border-box" }}>
        <div className="leadrow" style={{fontSize: "1.4em"}}>
          <div style={{fontWeight: "bold"}}>1.</div>
          <div style={{fontWeight: "bold"}}>68561</div>
          <div style={{fontFamily: "monospace", textAlign: "right", fontWeight: "bold"}}>$106.22</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>2.</div>
          <div>68549</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$105.44</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>3.</div>
          <div>68529</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$100.01</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>4.</div>
          <div>68547</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$99.80</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>5.</div>
          <div>68552</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$95.44</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>6.</div>
          <div>68511</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>$82.24</div>
        </div>
      </div>
    </div>
  )
}
function UPT() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1em"}}>
      <div style={{ fontWeight: "bold"}}>Unit Per Transaction</div>
      <div style={{ width: "100%", padding: "1em", boxSizing: "border-box" }}>
        <div className="leadrow" style={{fontSize: "1.4em"}}>
          <div style={{fontWeight: "bold"}}>1.</div>
          <div style={{fontWeight: "bold"}}>68561</div>
          <div style={{fontFamily: "monospace", textAlign: "right", fontWeight: "bold"}}>2.32</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>2.</div>
          <div>68549</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>1.98</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>3.</div>
          <div>68529</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>1.80</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>4.</div>
          <div>68547</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>1.78</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>5.</div>
          <div>68552</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>1.69</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>6.</div>
          <div>68511</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>1.69</div>
        </div>
      </div>
    </div>
  )
}
function DON() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1em"}}>
      <div style={{ fontWeight: "bold"}}>Donations to Goal (+%)</div>
      <div style={{ width: "100%", padding: "1em", boxSizing: "border-box" }}>
        <div className="leadrow" style={{fontSize: "1.4em"}}>
          <div style={{fontWeight: "bold"}}>1.</div>
          <div style={{fontWeight: "bold"}}>68561</div>
          <div style={{fontFamily: "monospace", textAlign: "right", fontWeight: "bold"}}>+0.98%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>2.</div>
          <div>68549</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+0.70%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>3.</div>
          <div>68529</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+0.70%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>4.</div>
          <div>68547</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+0.63%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>5.</div>
          <div>68552</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+0.61%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>6.</div>
          <div>68511</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>+0.60%</div>
        </div>
      </div>
    </div>
  )
}
function EMC() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1em"}}>
      <div style={{ fontWeight: "bold"}}>Email Capture (%)</div>
      <div style={{ width: "100%", padding: "1em", boxSizing: "border-box" }}>
        <div className="leadrow" style={{fontSize: "1.4em"}}>
          <div style={{fontWeight: "bold"}}>1.</div>
          <div style={{fontWeight: "bold"}}>68561</div>
          <div style={{fontFamily: "monospace", textAlign: "right", fontWeight: "bold"}}>64%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>2.</div>
          <div>68549</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>62%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>3.</div>
          <div>68529</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>62%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>4.</div>
          <div>68547</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>55%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>5.</div>
          <div>68552</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>52%</div>
        </div>
        <div className="leadrow">
          <div style={{fontWeight: "bold"}}>6.</div>
          <div>68511</div>
          <div style={{fontFamily: "monospace", textAlign: "right"}}>43%</div>
        </div>
      </div>
    </div>
  )
}













export default App