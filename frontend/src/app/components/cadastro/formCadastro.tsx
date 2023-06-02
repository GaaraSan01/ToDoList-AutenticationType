import Link from 'next/link'
import * as S from './style'
import { string, z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createdData } from '@/app/types/typesUser'
import baseUrl from '@/app/api/_api'
import { useRouter } from 'next/navigation'

const CadastroForm = () => {
    const createUserSchema = z.object({
        name: string().nonempty('O campo nome é obrigatório')
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(' ')
        }),
        email: string().nonempty('O campo email é obrigatório')
        .email('Email invalido').toLowerCase(),
        password: string().min(6, 'O minimo é 6 caracteres')
        .nonempty('O campo senha é obrigatório')
    })

    type CreateUserFormData = z.infer<typeof createUserSchema>

    const { register, handleSubmit, formState: {errors} } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserSchema)
    })

    const { push } = useRouter()

    const createUser = async (data: createdData) => {
        try {
            const response = await baseUrl.post('/cadastro', data)
            const dataCadastro = await response.data
            const { message } = await dataCadastro
            console.log(message)
            push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <S.Form onSubmit={handleSubmit(createUser)}>
                <S.Title>Cadastrar</S.Title>
                <S.Div>
                    <S.Input 
                        type='text' 
                        placeholder='Digite seu nome...'
                        {...register('name')}
                    />
                </S.Div>
                {errors.name && <span>{errors.name.message}</span>}
                <S.Div>
                    <S.Input 
                        type='email' 
                        placeholder='Digite seu e-mail...'
                        {...register('email')}
                    />
                </S.Div>
                {errors.email && <span>{errors.email.message}</span>}
                <S.Div>
                    <S.Input 
                        type='password' 
                        placeholder='Digite sua senha...'
                        {...register('password')}
                    />
                </S.Div>
                <S.Div>
                    <S.Input 
                        type='password' 
                        placeholder='Confirme sua senha'
                        {...register('password')}
                    />
                </S.Div>
                <S.Div>
                    <Link href={"/"}><S.Link>Voltar</S.Link></Link>
                    <S.Button>Cadastrar</S.Button>
                </S.Div>
            </S.Form>
        </>
    )
}

export default CadastroForm