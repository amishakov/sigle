import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import {
  NewslettersService,
  UpdateNewsletterDto,
  UpdateContactsListDto,
} from '../external/api';

type GetApiNewsletterReturnType = Awaited<
  ReturnType<typeof NewslettersService.newslettersControllerGet>
>;
export const useGetUserNewsletter = (
  options: UseQueryOptions<GetApiNewsletterReturnType, Error> = {},
) =>
  useQuery<GetApiNewsletterReturnType, Error>(
    ['get-user-newsletter'],
    () => NewslettersService.newslettersControllerGet(),
    options,
  );

type PostApiNewsletterReturnType = Awaited<
  ReturnType<typeof NewslettersService.newslettersControllerUpdate>
>;
export const useUpdateNewsletter = (
  options: UseMutationOptions<
    PostApiNewsletterReturnType,
    Error,
    UpdateNewsletterDto
  > = {},
) =>
  useMutation<PostApiNewsletterReturnType, Error, UpdateNewsletterDto>(
    (args) =>
      NewslettersService.newslettersControllerUpdate({
        requestBody: args,
      }),
    options,
  );

type GetApiContactsListsNewsletterReturnType = Awaited<
  ReturnType<typeof NewslettersService.newslettersControllerGetContactsLists>
>;
export const useGetContactsListsNewsletter = (
  options: UseQueryOptions<GetApiContactsListsNewsletterReturnType, Error> = {},
) =>
  useQuery<GetApiContactsListsNewsletterReturnType, Error>(
    ['get-user-contact-lists'],
    () => NewslettersService.newslettersControllerGetContactsLists(),
    options,
  );

type PostApiContactsListNewsletterReturnType = Awaited<
  ReturnType<typeof NewslettersService.newslettersControllerUpdateContactsList>
>;
export const useUpdateContactsListNewsletter = (
  options: UseMutationOptions<
    PostApiContactsListNewsletterReturnType,
    Error,
    UpdateContactsListDto
  > = {},
) =>
  useMutation<
    PostApiContactsListNewsletterReturnType,
    Error,
    UpdateContactsListDto
  >(
    (args) =>
      NewslettersService.newslettersControllerUpdateContactsList({
        requestBody: args,
      }),
    options,
  );

type PostApiSenderNewsletterReturnType = Awaited<
  ReturnType<typeof NewslettersService.newslettersControllerSyncSender>
>;
export const useSyncSenderNewsletter = (
  options: UseMutationOptions<PostApiSenderNewsletterReturnType, Error> = {},
) =>
  useMutation<PostApiSenderNewsletterReturnType, Error>(
    () => NewslettersService.newslettersControllerSyncSender(),
    options,
  );
