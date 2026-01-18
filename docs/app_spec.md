# Lunar Mobile App - Product Spec (MVP)

## Overview
Lunar is a mobile app for Muslim communities with three core modules:

1. **Spaces**: Community spaces with events and announcements.
2. **Halal Finder**: Find halal restaurants on map/list with verification filters.
3. **Bazaar**: Simple marketplace posts with off-app contact.

The app targets iOS and Android with a bottom navigation bar for the three modules.

## Navigation
- Bottom tabs: **Spaces**, **Halal Finder**, **Bazaar**.
- Global sign-in required for posting or admin actions.

## Roles
- **Super Admin**: Founders only, create/delete spaces.
- **Space Admin**: Can manage events/announcements for assigned spaces.
- **Member**: Can follow spaces, view events/announcements.
- **Seller**: Any authenticated user who creates bazaar posts.

## Spaces
### Features
- List of spaces created by Super Admins.
- Users can follow/subscribe to a space.
- Space detail includes events calendar and announcements feed.
- Push notifications triggered when announcements are created.

### Admin Actions
- Super Admins can create/update/delete spaces.
- Space Admins can create/update/delete events and announcements.

## Halal Finder
### Features
- Map view and list view of restaurants.
- Filter by verification category/level.
- Sort by distance using device location.
- Each restaurant has name, address, verification, and notes.

## Bazaar
### Features
- Grid/list of posts.
- Search by keyword and location.
- Post includes title, description, location, and contact email/phone.
- Contact happens off-app; no in-app messaging.

## MVP Non-Goals
- In-app payments.
- In-app chat.
- Complex moderation workflows.

## Analytics (Optional)
- Track space follows and event/announcement views.
- Track bazaar post views.
