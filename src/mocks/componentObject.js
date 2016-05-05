export const appObj = [
	{
    id: "g3hj34",
    name: "mock section",
    title: "Generic Section",
    type: "Section",
		children: [
			{
				id: "e34fdc",
				name: "firstName",
				label: "First Name",
				type: "GenericComponent",
				placeholder: "Firstname",
				dependencies: [],
				validations: {}
			},
			{
				id: "sd4fdc",
				name: "Address",
				label: "address ",
				type: "GenericComponent",
				placeholder: "enter your address",
				dependencies: [],
				validations: {}
			},
			{
				id: "f2fj3j",
				name: "lastName",
				label: "Last name",
				type: "GenericComponent",
				tooltip: "Enter your lastname, you might call it surname!",
				placeholder: "Surname",
				dependencies: [],
				validations: {
					isRequered: "true"
				}
			},
			{
				id: "d7s6fv",
				name: "email",
				label: "Email",
				type: "GenericComponent",
				tooltip: "Enter your email!",
				placeholder: "email",
				dependencies: [],
				validations: {
					isRequered: "true",
					isEmail: "true"
				}
			},
			{
				id: "ser6fv",
				name: "confirmEmail",
				label: "Confirm email",
				type: "GenericComponent",
				tooltip: "Reenter your email!",
				placeholder: "confrim email",
				dependencies: [],
				validations: {
					isRequered: "true",
					isEmail: "true"
				}
			},
			{
				id: "lfd74k",
				title: "Submit",
				type: "Cta",
				dependencies: []
			}
		],
    dependencies: [],
    validations: {}
	}
]
