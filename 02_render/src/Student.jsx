//propTypes - do sprawdzania czy dana wlasciwosc ma odpowiedni typ 
//defaultProps - ustawianie domyslnych wartosci

//condiction render - renderowanie warunkowe decydujemy co ma byc wyrendereowane
import PropTypes from "prop-types"

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    );S
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student