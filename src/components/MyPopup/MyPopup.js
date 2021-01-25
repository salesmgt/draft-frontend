import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import PropTypes from 'prop-types'

function MyPopup(props) {
    const {tiltle, children, openPopup, setOpenPopup} = props
    console.log("hihi ",openPopup)
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>Title is here</div>
            </DialogTitle>
            <DialogContent>
                <div>Contents goes here</div>
            </DialogContent>
        </Dialog>
    )
}

MyPopup.propTypes = {

}

export default MyPopup

