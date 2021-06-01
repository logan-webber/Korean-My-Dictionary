






function Button(props) {
    return (
        <>

        </>
    )

}







const mapStateToProps = ({ auth }) => {
    return {
        auth,
    }
}

export default connect(mapStateToProps)(Button)