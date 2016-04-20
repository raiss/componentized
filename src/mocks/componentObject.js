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
				title: "First Name",
				type: "GenericComponent",
				placeholder: "Firstname",
				dependencies: [],
				validations: []
			},
			{
				id: "f2fj3j",
				name: "lastName",
				title: "Last name",
				type: "GenericComponent",
				tooltip: "Enter your lastname, you might call it surname!",
				placeholder: "Surname",
				dependencies: [],
				validations: [
					{
						isRequered: "true"
					}
				]
			}
		],
    dependencies: [],
    validations: []
	}
]
