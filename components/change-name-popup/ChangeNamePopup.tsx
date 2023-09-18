import { useState } from 'react'
import styles from './ChangeNamePopup.module.css'
import { useSession } from 'next-auth/react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

interface ChangeNamePopupProps {
    setShowNameChangeModal: (show: boolean) => void
}

const ChangeNamePopup: React.FC<ChangeNamePopupProps> = ({ setShowNameChangeModal }) => {

    const [name, setName] = useState<string>('')

    const { data: session } = useSession()
    const changeName = useMutation(api.users.changeUsername)

    const handleSubmit = async () => {
        if (!session?.user?.email) return

        await changeName({
            newUsername: name,
            email: session.user.email
        })
        setShowNameChangeModal(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Change your name</h1>
                <input className={styles.input} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <div style={{ display: 'flex' }}>
                    <button className={styles.cancel} onClick={() => setShowNameChangeModal(false)}>Cancel</button>
                    <button className={styles.submit} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ChangeNamePopup