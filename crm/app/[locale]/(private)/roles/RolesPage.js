'use client';

import RoleEditor from "@/components/Items/RolesEditor";
import RolesList from "@/components/Lists/RolesList";
import AddRole from "@/components/Popup/AddRole";
import { selectRolesList } from "@/store/selectors/selectors";
import { setRolesList } from "@/store/slices/rolesSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RolesPage({ initialRoles }) {
  const dispatch = useDispatch();
  const roles = useSelector(selectRolesList);
  const [open, setOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(null);

  const openEditor = () => setOpen(true);
  const closeEditor = (role) => {
    setOpen(false);
    if (role) {
      dispatch(setRolesList([...roles, role]));
    }
  };
  
  const updateRole = (updatedRole) => {
    const newList = roles.map(r =>
      r._id === updatedRole._id ? updatedRole : r
    );

    dispatch(setRolesList(newList));
    setActiveRole(updatedRole);
  };

  useEffect(() => {
    if (roles.length === 0 && initialRoles?.length) {
      dispatch(setRolesList(initialRoles));
      setActiveRole(initialRoles[0]);
    }
  }, [dispatch, initialRoles, roles.length]);

  return (
    <>
      <section className="roles">
        <div className="roles__container">
          <RolesList
            open={open}
            onOpen={openEditor}
            roles={roles}
            activeRole={activeRole}
            onSelect={setActiveRole} 
          />
          {activeRole && (
            <RoleEditor
              role={activeRole}
              onChange={updateRole} 
            />
          )}
        </div>
      </section>
      <AddRole open={open} onClose={(role) => closeEditor(role)} />
    </>
  );
}
