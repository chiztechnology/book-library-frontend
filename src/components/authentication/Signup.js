import React, { useState } from 'react';
import {
    Paper,
    createStyles,
    TextInput,
    Button,
    Title,
    Text,
    Select,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css"
import { useDispatch } from 'react-redux';
import { useForm } from '@mantine/form';
import { uploadUser } from '../../redux/authentication';
import { notifications } from '@mantine/notifications';

const useStyles = createStyles((theme) => ({

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

const Signup = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            firstname: '',
            lastname: '',
            gender: '',
            email: '',
            password: '',
            telephone: ''
        },
    });

    const handleSubmitForm = (data) => {
        setLoading(true);
        dispatch(uploadUser(data.values));
        // 
        form.reset();
        notifications.show({
            title: 'Notification',
            content: 'User successfully created!',
            color: 'red',
            autoClose: true
        });

        navigate('../login');

    }

    const { classes } = useStyles();

    return (
        <div className="wrapper">
            <Paper className="form" radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome the car renting App!
                </Title>
                <form className="car-form---" onSubmit={form.onSubmit(() => handleSubmitForm(form))}>
                    <TextInput
                        name='email'
                        label="Email address"
                        placeholder="example@email.com"
                        size="sm"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    />
                    <TextInput
                        name='password'
                        label="Password"
                        placeholder="************"
                        size="sm"
                        value={form.values.password}
                        type='password'
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    />
                    <div style={{ display: 'flex' }}>
                        <TextInput
                            label="First name"
                            name='firstname'
                            placeholder="First name"
                            size="sm"
                            value={form.values.firstname}
                            onChange={(event) => form.setFieldValue('firstname', event.currentTarget.value)}
                        />
                        <TextInput
                            label="last Name"
                            name='lastname'
                            placeholder="Last name"
                            size="sm"
                            style={{ marginLeft: 5 }}
                            value={form.values.lastname}
                            onChange={(event) => form.setFieldValue('lastname', event.currentTarget.value)}
                        />
                    </div>
                    <Select
                        size="sm"
                        label="Gender"
                        radius="md"
                        placeholder="Select"
                        data={[
                            { value: 'M', label: 'Male' },
                            { value: 'F', label: 'Female' },
                        ]}
                        value={form.values.gender}
                        onChange={(event) => form.setFieldValue('gender', event)}
                    />
                    <TextInput
                        label="Telephone"
                        name='telephone'
                        placeholder="+38 xx xxx xx"
                        size="sm"
                        value={form.values.telephone}
                        onChange={(event) => form.setFieldValue('telephone', event.currentTarget.value)}
                    />
                    <Button fullWidth mt="xl" size="md" color='lime' type='submit' loading={loading}>
                        Signup
                    </Button>
                </form>

                <Text ta="center" mt="md">
                    Already have an account?{' '}
                    {/* Don&apos;t have an account?{' '} */}
                    <Link to="../login">Login</Link>
                    {/* <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
              Register
            </Anchor> */}
                </Text>
            </Paper>
        </div>
    );
}

export default Signup;