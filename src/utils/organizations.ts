import axios from 'axios';

import { convertToBoolString } from './util';
import { OrganizationDetailFormType } from '../types/organization-detail';
import { OrganizationsRawType } from '../types/organizations';

async function getOrganizations(
  page = 0,
  pageSize = 20
): Promise<OrganizationsRawType> {
  const url = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';
  const res = await axios.get(
    `${url}/organizations?page=${page}&page_size=${pageSize}`
  );
  return await res.data;
}

async function sendOrganization(organizationData: OrganizationDetailFormType) {
  const res = await axios.post('http://127.0.0.1:8000/organizations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      ...organizationData,
      accepts_members_flag: convertToBoolString(
        organizationData.accepts_members_flag
      ),
    },
  });
  return await res.data;
}

export { getOrganizations, sendOrganization };
