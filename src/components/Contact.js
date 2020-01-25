import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import SectionHeader from '../subComponents/SectionHeader';
import {Container,StyledSelect,StyledErrorMessage,StyledLabel} from '../styles/ContactStyles';
import letter from '../images/letter.svg';

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
	  .min(2, 'Too Short!')
	  .max(50, 'Too Long!')
	  .required('Required'),
	lastName: Yup.string()
	  .min(2, 'Too Short!')
	  .max(50, 'Too Long!')
	  .required('Required'),
	email: Yup.string()
	  .email('Invalid email')
	  .required('Required'),
	  question:Yup.string()
	  .min(10,"Too Short")
	  .required('Required')
  });

  const MyTextInput = ({ label, ...props }) => {

	const [field, meta] = useField(props);
	return (
	  <>
		{/* <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel> */}
		<StyledSelect className="text-input" {...field} {...props} />
		{meta.touched && meta.error ? (
		  <StyledErrorMessage className="error">{meta.error}</StyledErrorMessage>
		) : null}
	  </>
	);
  };

function Contact() {
	
	return (
		<Container>
			<SectionHeader title="Contact Section" />
				<h1 className="header">have some questions?</h1>
				<div className = "outerdiv">
					<img src={letter} alt="Letter Image" />
					<div className='formWrapper'> 
						<Formik
							initialValues={{
							firstName: '',
							lastName: '',
							email: '',
							question:''
						}}
						validationSchema = {SignupSchema}
						onSubmit={values => {
							console.log(values);
						  }}
						>
							<Form className = "formdiv">
							<MyTextInput
								label="First Name"
								name="firstName"
								type="text"
								placeholder="Your First Name"

							/>
							<MyTextInput
								label="Last Name"
								name="lastName"
								type="text"
								placeholder="Your First Name"
							/>
							<MyTextInput
								label="Email"
								name="email"
								type="email"
								placeholder="fullname@example.com"
							/>
							<MyTextInput
								label="Your Question"
								name="question"
								type="text"
								placeholder="Type Your Question..."
							/>
							<button type="submit">Submit</button>

							</Form>
						</Formik>
					</div>

				</div>
		</Container>
	);
}

export default Contact;



