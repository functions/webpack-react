/**
 * 
 */
let { Button, Input } = Antd;
import MenuNav from 'common/ui/MenuNav';
import ProjectInfo from './ProjectInfo';


export default class Projects extends React.Component {
    
    defaultProps = {

    }

    state = {

    }

    constructor() {
        super();
    }

    render() {
        let menuNavData = [
            {
                key: 1,
                title: '项目1',
                items: [
                    {
                        key: '1-1',
                        title: '资源',
                        link: '/page/projects/resource'
                    },
                    {
                        key: '1-2',
                        title: '角色',
                        link: '/page/projects/roles'
                    },
                    {
                        key: '1-3',
                        title: '用户',
                        link: '/page/projects/users'
                    }
                ]
            },
            {
                key: 2,
                title: '项目2',
                items: [
                    {
                        key: '2-1',
                        title: '资源',
                        link: '/page/projects/resource'
                    },
                    {
                        key: '2-2',
                        title: '角色',
                        link: '/page/projects/roles'
                    },
                    {
                        key: '2-3',
                        title: '用户',
                        link: '/page/projects/users'
                    }
                ]
            }
        ];
        let managers = [
            {
                key: 1,
                text: 'bin.cao',
                selected: true
            },
            {
                key: 2,
                text: 'aaaaa',
                selected: true
            },
            {
                key: 3,
                text: 'bbbbb',
                selected: false
            },
            {
                key: 4,
                text: 'ccccc',
                selected: false
            },
            {
                key: 5,
                text: 'ddddd',
                selected: false
            }
        ];

        return (
            <div className="proj-wrap">
                <div className="proj-list">
                    <div className="proj-toolbar">
                        <Button className="proj-btn" type="ghost" 
                                onClick={this.btnNewProject.bind(this)}>新建项目</Button>
                    </div>
                    <div className="menu-nav-scroll">
                        <div className="menu-nav-wrap">
                            <MenuNav data={menuNavData} />
                        </div>
                    </div>
                </div>
                <div className="proj-content">
                    { this.props.children }
                </div>

                <ProjectInfo ref="projectInfo" 
                    projectName={''} 
                    managers={managers}
                    onFinish={this.onProjectInfoFinished.bind(this)}
                />
            </div>
        );
    }

    componentDidMount() {

    }

    btnNewProject() {
        this.refs.projectInfo.show();
    }

    onProjectInfoFinished() {
        
    }

}
