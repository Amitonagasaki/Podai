"use client"
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk as OriginalConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

interface ConvexProviderWithClerkProps {
  children: ReactNode;
}

const ConvexProviderWithClerk = ({ children }: ConvexProviderWithClerkProps) => (
  <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string} appearance={{
    layout:{socialButtonsVariant:'iconButton',
      logoImageUrl:'/icons/auth-logo.svg'
  },
  variables:{
    colorBackground:'#15171c',
    colorPrimary:'',
    colorText:'white',
    colorInputBackground:'#1b1f29',
    colorInputText:'white',

  }
  
  }}>
    <OriginalConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </OriginalConvexProviderWithClerk>
  </ClerkProvider>
);

export default ConvexProviderWithClerk;
