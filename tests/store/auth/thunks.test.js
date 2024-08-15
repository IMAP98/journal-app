import { signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('Tests in thunks.js', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should call checkingCredentials', async () => {

        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());

    });

    test('startGoogleSignIn should call checkingCredentials and login successfully', async () => {

        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue(loginData);

    });


});
