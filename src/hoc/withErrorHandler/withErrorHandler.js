import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component{
        state = {
            error: null
        }

        constructor(props) {
            super(props);
            this.reqIntercptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resIntercptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            console.log('Will Unmount', this.reqIntercptor, this.resIntercptor)
            axios.interceptors.request.eject(this.reqIntercptor);
            axios.interceptors.response.eject(this.resIntercptor);
            // clean up to prevent memory leaks
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            );
        }
        
    }
}

export default withErrorHandler;