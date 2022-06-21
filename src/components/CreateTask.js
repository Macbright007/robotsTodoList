import { Form, InnerForm } from './styles'


const CreateTask = ({ showModal, task, decriptions, loading, setTaskDetails, handleSubmit }) => {
    return (
        <>
            {showModal ? (
                <Form onSubmit={handleSubmit} >
                    <InnerForm>
                        <label htmlFor="title">
                            Title:
                        </label>
                        <br />
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={task.title}
                            onChange={setTaskDetails}
                            required
                        />
                    </InnerForm>
                    <InnerForm>
                        <label htmlFor="decriptions">
                            description:
                        </label>
                        <br />
                        <textarea
                            cols="30"
                            rows="4"
                            type="text"
                            id="decriptions"
                            name="decriptions"
                            value={decriptions}
                            onChange={setTaskDetails}
                            required
                        />
                    </InnerForm>
                    <button disabled={loading} >
                        {
                            loading ? 'Submitting...' : 'Submit'
                        }
                    </button >
                </Form >
            ) : null}
        </>
    )
}

export default CreateTask