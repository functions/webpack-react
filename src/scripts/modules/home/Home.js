/**
 * 主页面
 */

import PageFrame from 'common/ui/PageFrame';
import Projects from '../projects/Projects';


export default class Home extends React.Component {
    
    defaultProps = {

    }

    state = {

    }

    constructor() {
        super();
    }

    render() {
        return (
            <PageFrame>
                <Projects>
                    { this.props.children }
                </Projects>
            </PageFrame>
        );
    }

    componentDidMount() {

    }

}
