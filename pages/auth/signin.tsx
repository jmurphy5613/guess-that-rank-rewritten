import { GetServerSidePropsContext, InferGetStaticPropsType } from "next"
import { getServerSession } from "next-auth"
import { getProviders, signIn } from "next-auth/react"
import { authOptions } from "../api/auth/[...nextauth]"
import styles from '../../styles/auth/Signin.module.css'
import { getCompanyIconFromId } from "@/utils/conversions"
import Logo from "@/components/icons/Logo"



const Signin = ({ providers }: InferGetStaticPropsType<typeof getServerSideProps>) => {

    const getBackgroundColor = (id: string) => {
        switch (id) {
            case 'google':
                return '#EA4335'
            case 'github':
                return '#333'
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles["logo-image-container"]}>
                        <Logo stroke="#354DA1" />
                    </div>
                    <h1 className={styles["app-title"]}>GuessThatRank</h1>
                </div>

                <h1 className={styles.title}>signin to save data!</h1>
                {Object.values(providers).map((provider) => (
                    <button 
                        key={provider.id} 
                        className={styles["provider-button"]} 
                        style={{ backgroundColor: getBackgroundColor(provider.id) }}
                        onClick={() => signIn(provider.id)}
                    >
                        <h2 className={styles.name}>Sigin in with</h2>
                        <div className={styles["logo-container"]}>
                            {getCompanyIconFromId(provider.id)}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Signin

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (session) {
        return { redirect: { destination: "/games" } };
    }

    const providers = await getProviders();

    return {
        props: { providers: providers ?? [] },
    }
}