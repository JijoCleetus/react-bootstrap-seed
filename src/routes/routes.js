import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import { HomeComponent } from '../components/home';
import { AboutComponent } from '../components/about';
import { DashboardComponent } from '../components/dashboard';
import { NotFoundComponent } from '../components/notfound';
import { Navigator } from '../components/common/navigator';


export class Routes extends React.Component {
    render() {
        return (
            <div>
                <Navigator />
                <Switch >
                    <Route path='/' exact component={HomeComponent} />
                    <Route path="/home" exact component={HomeComponent} />
                    <Route path="/about" component={AboutComponent} />
                    <Route path="/dashboard" component={DashboardComponent} isPrivate />
                    <Route component={NotFoundComponent} />
                </Switch >
            </div>
        )
    }
}

export default Routes;