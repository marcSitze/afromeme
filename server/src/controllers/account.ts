import { Request, Response } from 'express';
import AccountService from '../services/account.service';
import { SuccessHandler, ErrorHandler } from '../common/response.handler';

import constants from '../common/constants';
import { AccountDTO } from '../dto/account.dto';
const { httpStatus } = constants;

const accountService = new AccountService();

export const getAccount = async (req: any, res: Response) => {

    try {
        const account = await accountService.findOne({user: req.user.id});
        if(!account) {
            return ErrorHandler(res, httpStatus.NOT_FOUND, 'User not found');
        }

        SuccessHandler(res, httpStatus.OK, account);
    } catch (err) {
        console.log(err);
        ErrorHandler(res, httpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong');
    }
}

export const updateAccount = async (req: any, res: Response) => {
      const query: Partial<AccountDTO> = req.body;
    try {
        const account = await accountService.getAccountById(req.params.id);
				if(!account) {
					 return ErrorHandler(res, httpStatus.NOT_FOUND, 'User not found');
			  }
			  await accountService.updateAccount(req.params.id, query);
				SuccessHandler(res, httpStatus.OK, "account updated successfully");
    } catch (err) {
        console.error(err);
        ErrorHandler(res, httpStatus.INTERNAL_SERVER_ERROR, 'Something went wrong');
    }
}

export const getAccounts = async (req: Request, res: Response) => {
    
}