import { Route, Routes } from "react-router-dom";
import { ADMIN_PAGES } from "../../routes/Routes";
import { BaseLayout } from "./BaseLayout"

export const AdminLayout = () => {
  return (
    <>
      {/* <ProtectedRoutes roles={['ADMIN']}>
          <Route path='/dashboard' element={<AdminDashboardPage />} />
        </ProtectedRoutes> */}
      {
        ADMIN_PAGES.map((pages, index) =>
        // <Route path={pages.path} element={pages.component}
        {
          <Route path='/admin' element={<>BASE ADMIN</>}>
            <Route path='/dashboard' element={<AdminDashboardPage />} />
          </Route>
        }
        )
      }
    </>
    // <BaseLayout>
    //   {/* <AdminDashboard data={filteredAdminData} /> */}
    //   {
    //     ADMIN_PAGES.map((pages, index) =>
    //       console.log('pages')
    //       // <Route
    //       //   path={pages.path}
    //       //   element={pages.component}
    //       //   key={index}
    //       // />
    //     )
    //   }
    // </BaseLayout>
  )

}