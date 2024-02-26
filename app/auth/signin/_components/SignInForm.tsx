'use client';
import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, rem, Paper, Button, Flex } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { signIn } from "next-auth/react";

function EmailInputGroup({form}: any) {
    const rightSection = (
        <Tooltip
            label="We store your data securely"
            position="top-end"
            withArrow
            transitionProps={{ transition: 'pop-bottom-right' }}
        >
            <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
                <Center>
                    <IconInfoCircle style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                </Center>
            </Text>
        </Tooltip>
    );

    return (
        <TextInput
            rightSection={rightSection}
            label="Sign in with email"
            // placeholder="Your email"
            required
            {...form.getInputProps('email')}
        />
    );
}

function PasswordInputGroup({form}: any) {
    const [opened, setOpened] = useState(false);
    const [value, setValue] = useState('');
    const valid = value.trim().length >= 6;
    return (
        <Tooltip
            label={valid ? 'All good!' : 'Password must include at least 6 characters'}
            position="bottom-start"
            withArrow
            opened={opened}
            color={valid ? 'teal' : undefined}
            withinPortal
        >
        <PasswordInput
            label="Password"
            required
            // placeholder="Your password"
            onFocus={() => setOpened(true)}
            onBlur={() => setOpened(false)}
            mt="md"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            {...form.getInputProps('password')}
        />
        </Tooltip>
    );
}

const SignInForm = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
    
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    
    return (
        <Paper>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <EmailInputGroup form={form} />
                <PasswordInputGroup form={form} />

                <Button type='submit' fullWidth mt="xl" size="md"
                    onClick={() =>
                        signIn("credentials", {
                            email: form.values.email,
                            password: form.values.password,
                            redirect: true,
                            callbackUrl: "/user-area",
                        })
                        // console.log('test values ', form.values)
                    }
                >
                    Sign In
                </Button>
            </form>
        </Paper>
    );
}

export default SignInForm;