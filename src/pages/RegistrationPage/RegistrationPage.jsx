import { Link } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';
import Title from '../../components/Title/Title';

export default function Registration() {
    return (
        <div className={css.container}>
            <Title>Event Registration</Title>
            <RegistrationForm />
        </div>
    );
}
