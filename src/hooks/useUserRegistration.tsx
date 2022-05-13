const useUserRegistration = () => {
    const registerUser = async (e: React.FormEvent<HTMLFormElement>, formValues: any) => {
        e.preventDefault();
        if (!formValues.login || !formValues.email || !formValues.password || !formValues.repeatedPassword) {
            return console.log("Nieprawidłowe dane");
        };

        const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });
        const data = await res.json();

        if(!res.ok) return console.log(data.message);

        console.log(data);
    };

    return { registerUser };
};

export default useUserRegistration;