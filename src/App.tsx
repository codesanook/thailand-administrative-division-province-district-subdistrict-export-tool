import * as React from 'react';
import AdministrativeDivision, { DivisionType } from './AdministrativeDivision';
import DatabaseTypeSelectList from './DatabaseTypeSelectList';
import SqlScriptExport from './SqlScriptExport';

const App: React.FunctionComponent = () => {
  return (
        <div className='division-app'>
            <div className='content-header -large -underline _text-center'>
                Thailand Administrative Division Export Tool
            </div>
            <div className='body'>
                <DatabaseTypeSelectList />
                <AdministrativeDivision title={'Province'} type={DivisionType.Province} />
                <AdministrativeDivision title={'District'} type={DivisionType.District} />
                <AdministrativeDivision title={'Subdistrict'} type={DivisionType.Subdistrict} />
                <SqlScriptExport />
            </div>
        </div>
  );
};

export default App;
