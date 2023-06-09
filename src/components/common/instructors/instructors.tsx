import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Instructor, InstructorFormProps } from '../../../interface';
import '../questions/form.css'
import '../questions/question.css'
const InstructorForm: React.FC<InstructorFormProps> = ({ onSubmit }) => {
    const [instructor, setInstructor] = useState<Instructor>({
        _id: '',
        id: Date.now(),
        name: '',
        email: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInstructor(prevInstructor => ({
            ...prevInstructor,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(instructor);
        saveToLocalStorage(instructor); // Save instructor data to local storage
        clearForm();
    };

    const saveToLocalStorage = (data: Instructor) => {
        const existingData = localStorage.getItem('instructors');
        let updatedData = [];
        if (existingData) {
            updatedData = JSON.parse(existingData);
        }
        updatedData.push(data);
        localStorage.setItem('instructors', JSON.stringify(updatedData));
    };

    const clearForm = () => {
        setInstructor({
            _id: '',

            id: 0,
            name: '',
            email: ''
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>

            <label className="form-label" htmlFor="name">
                Name:
            </label>
            <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={instructor.name}
                onChange={handleChange}
                required
            />

            <label className="form-label" htmlFor="email">
                Email:
            </label>
            <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={instructor.email}
                onChange={handleChange}
                required
            />
            <button className="form-button " type="submit">Create Instructor</button>
        </form>
    );
};

export default InstructorForm;
