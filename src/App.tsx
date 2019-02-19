import * as React from "react";
import AdministrativeDivision from "./AdministrativeDivision";
import DatabaseType from "./DatabaseType";
import SqlExport from "./SqlExport";

const App: React.FunctionComponent = () => {
    return (
        <div id="main">
            <div className="head">
                Thailand Administrative Division Export Tool
            </div>
            <div className="body">
                <DatabaseType />
                <AdministrativeDivision title={'Province'} additionalClassNames={['province']} />
                <AdministrativeDivision title={'District'} additionalClassNames={['district']} />
                <AdministrativeDivision title={'Subdistrict'} additionalClassNames={['subdistrict']} />
                <SqlExport />
            </div>
        </div>
    )
};

export default App
