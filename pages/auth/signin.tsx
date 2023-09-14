import { GetServerSidePropsContext, InferGetStaticPropsType } from "next"
import { getServerSession } from "next-auth"
import { getProviders } from "next-auth/react"
import { authOptions } from "../api/auth/[...nextauth]"
import styles from '@/styles/auth/signin.module.css'


const Signin = ({ providers }: InferGetStaticPropsType<typeof getServerSideProps>) => {

    console.log(providers)

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1 className={styles.title}>Sign in</h1>
                {Object.values(providers).map((provider) => (
                    <button className={styles["provider-button"]}>
                        <h2 className={styles.name}></h2>
                        <div className={styles["logo-container"]}>
                            
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
        return { redirect: { destination: "/" } };
    }

    const providers = await getProviders();

    return {
        props: { providers: providers ?? [] },
    }
}