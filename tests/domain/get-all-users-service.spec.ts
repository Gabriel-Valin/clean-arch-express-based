import GetAllUsersService from "@/domain/services/get-all-users-service"
import { mock, MockProxy } from 'jest-mock-extended'
import { GetUsers } from "./repos/get-users"

describe('GetAllUsersService', () => {
    let sut: GetAllUsersService
    let usersRepository: MockProxy<GetUsers>

    beforeAll(() => {
       usersRepository = mock()
    })

    beforeEach(() => {
        sut = new GetAllUsersService(usersRepository)
        usersRepository.allUsers.mockResolvedValue([
            {
                name: 'user 1',
                email: 'user 1',
                age: 'user 1',
                departament: 'user 1',
                created_at: new Date(),
                inative: false
            },
        ])
    })

    it('should call allUsers one time', async () => {
        await sut.perform()

        expect(usersRepository.allUsers).toHaveBeenCalledTimes(1)
    })
})