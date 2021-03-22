import React from 'react';
import {Link, withRouter} from 'react-router-dom';


const Progress = ({location:{pathname}}) => {
    const isPartOne = pathname === '/';
    const isPartTwo = pathname === '/second';
    const isPartThree = pathname === '/third';
    const isLoginPage = pathname === '/login';
    return (
        <React.Fragment>
            {!isLoginPage ? (
            <div className="steps">
                <div className={`${isPartOne ? 'step active' : 'step'}`}>
                    <div>1</div>
                    <div>
                        {isPartTwo || isPartThree ? (
                            <Link to ='/'>Step 1</Link>
                        ) : (
                            'Step 1'
                        )}
                        </div>
                </div>
                <div className={`${isPartTwo? 'step active' : 'step'}`}>
                    <div>2</div>
                    <div>{isPartThree ? <Link to='/second'>Step 2</Link> : 'Step 2'}</div>                    
                </div>
                <div className={`${pathname === '/third' ? 'step active' : 'step'}`}>
                    <div>3</div>
                    <div>Step 3</div>
                </div>
            </div>
            ) : (
                <div></div>
            )}
        </React.Fragment>
    )
};

export default withRouter(Progress);